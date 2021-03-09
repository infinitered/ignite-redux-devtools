# Ignite Redux DevTools

## Why is this archived?

We really appreciate all the community support in the years since we first released ignite-redux-devtools. Our focus has shifted to the latest version of [Ignite](https://github.com/infinitered/ignite), which does not have a plugin-based architecture ([read more here](https://shift.infinite.red/introducing-ignite-4-0-flame-1dfc891f9966)). Feel free to fork this library and continue on its legacy if you want. 

This plugin adds support for remote-redux-devtools.

By default it is setup to work with [http://remotedev.io/local/](http://remotedev.io/local/)
but can also be configured to work with a local server such as 
[https://github.com/zalmoxisus/remotedev-server](https://github.com/zalmoxisus/remotedev-server)
and/or the [chrome extension](http://extension.remotedev.io/).

## Install

```
ignite add redux-devtools
```

## Uninstall

```
ignite remove redux-devtools
```

## Contributing

1. Clone this repo
2. Run `npm install`
3. Run `npm test`
4. Check out a branch and make your changes
5. Write tests for those changes
6. Submit a pull request back upstream

## License

This plugin is licensed MIT by Infinite Red, Inc., and was created by Ryan Linton.

## Acknowledgements

Special thanks to [@l1br3](https://github.com/l1br3) for providing the initial code for this.
