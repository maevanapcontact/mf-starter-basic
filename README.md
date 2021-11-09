# MF STARTER BASIC

Basic Module Federation application using React applications.

The `consumer` application uses the `Header` module from the `remote` application (that exposes this module).

`consumer` runs on port 3000.

`remote` runs on port 3001.

## Get started

### Consumer app

```
cd mf-starter-basic/consumer
yarn
```

To run the app alone (port 3000)

```
yarn start
```

**Warning:** As the `consumer` uses the `remote`, you must start the `remote` app to make the `consumer` works.

### Remote app

```
cd mf-starter-basic/remote
yarn
```

To run the app alone (port 3001)

```
yarn start
```

### Workspace

After installing the packages for both applications (`consumer` and `remote`), you can run the whole project as a workspace.

This replaces the separated `yarn start` commands.

```
cd mf-starter-basic
yarn
yarn start
```
