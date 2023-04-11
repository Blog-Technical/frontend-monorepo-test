import { readdirSync, existsSync } from 'fs';
import path from 'path';
import autocompletePrompt from 'inquirer-autocomplete-prompt';
import util from 'util';
import * as childProcess from 'child_process';
const exec = util.promisify(childProcess.exec);

const { INSTALL_DIR, PWD } = process.env;
const pathPostfix = INSTALL_DIR || 'libs';
const basePath = PWD || '/';
const compPath = path.resolve(basePath, pathPostfix);
const toKebabCase = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

const getDirList = (path) => {
  return readdirSync(path, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
};

const groupsList = getDirList(compPath);

const validateInput = (input) => {
  if (input && input !== '') {
    return /^[a-zA-Z.-]+$/.test(input);
  }
  return false;
};

const checkDuplicateComponent = (name) => {
  let message = '';
  const status = groupsList.some((group) => {
    const dirList = getDirList(`${compPath}/${group}`);
    if (dirList.includes(name)) {
      message = `duplicate component name ${name} at ${group}`;
      return true;
    }
  });
  return { status, message };
};

export default function (plop) {
  plop.setDefaultInclude({ helpers: true });

  plop.setPrompt('getGroup', autocompletePrompt);

  plop.setActionType('validateFields', function (answers, config, plop) {
    const { group, name } = answers || {};
    const nameValid = validateInput(name);
    const groupValid = validateInput(group);
    if (!nameValid || !groupValid) {
      throw new Error(
        `[${!nameValid && 'component name'}${
          !groupValid && ', group name'
        }}] invalid` // can refer to a conventions url here once ready
      );
    }
    const { status, message } = checkDuplicateComponent(
      name
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase()
    );
    if (status) {
      throw new Error(message);
    }
    return 'fields valid';
  });

  plop.setGenerator('component', {
    description: 'Creating new react components',
    prompts: [
      {
        type: 'getGroup',
        name: 'group',
        message: 'Choose component group',
        source: function (answersSoFar, input) {
          return ['component', 'module', 'template'];
        },
      },
      {
        type: 'input',
        message: 'Enter component name',
        name: 'name',
      },
    ],
    actions: [
      {
        type: 'validateFields',
      },
      {
        type: 'add',
        templateFile: 'plop-template/jest.config.ts.hbs',
        path: `${compPath}/ui-{{kebabCase group}}-{{kebabCase name}}/jest.config.ts`,
      },
      {
        type: 'add',
        templateFile: 'plop-template/package.json.hbs',
        path: `${compPath}/ui-{{kebabCase group}}-{{kebabCase name}}/package.json`,
      },
      {
        type: 'add',
        templateFile: 'plop-template/tsconfig.json.hbs',
        path: `${compPath}/ui-{{kebabCase group}}-{{kebabCase name}}/tsconfig.json`,
      },
      {
        type: 'add',
        templateFile: 'plop-template/tsconfig.lib.json.hbs',
        path: `${compPath}/ui-{{kebabCase group}}-{{kebabCase name}}/tsconfig.lib.json`,
      },
      {
        type: 'add',
        templateFile: 'plop-template/tsconfig.spec.json.hbs',
        path: `${compPath}/ui-{{kebabCase group}}-{{kebabCase name}}/tsconfig.spec.json`,
      },
      {
        type: 'add',
        templateFile: 'plop-template/src/types.ts.hbs',
        path: `${compPath}/ui-{{kebabCase group}}-{{kebabCase name}}/src/types.ts`,
      },
      {
        type: 'add',
        templateFile: 'plop-template/src/component.tsx.hbs',
        path: `${compPath}/ui-{{kebabCase group}}-{{kebabCase name}}/src/{{kebabCase name}}.tsx`,
      },
      {
        type: 'add',
        templateFile: 'plop-template/src/component.spec.tsx.hbs',
        path: `${compPath}/ui-{{kebabCase group}}-{{kebabCase name}}/src/{{kebabCase name}}.spec.tsx`,
      },
      {
        type: 'add',
        templateFile: 'plop-template/src/component.stories.tsx.hbs',
        path: `${compPath}/ui-{{kebabCase group}}-{{kebabCase name}}/src/{{kebabCase name}}.stories.tsx`,
      },
      {
        type: 'add',
        templateFile: 'plop-template/src/index.ts.hbs',
        path: `${compPath}/ui-{{kebabCase group}}-{{kebabCase name}}/src/index.ts`,
      },
      // {
      //   type: 'installDependencies',
      // },
    ],
  });
}
