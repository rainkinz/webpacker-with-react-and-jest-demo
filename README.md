# Demo Project with Webpacker/React and Jest integration

## Dependencies

* Ruby 2.4.x (though 2.3.x or better will probably work)
* yarn

## Setup

```sh
bundle install
bin/yarn install
rake db:create db:migrate
```

## Testing

### Client Tests

I'm using Jest for Javascript testing. Tests are located in the
`assets/javascript/packs/<COMPONENT_NAME>/__tests__` directories

To run the tests, from the apps root directory run:

```sh
bin/yarn test
```

Alternatively, to have Jest re-run when files are changed, run:

```sh
bin/yarn test -- --watch
```


## TODO: Fill out the following?

* Services (job queues, cache servers, search engines, etc.)
* Deployment instructions
