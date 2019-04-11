import { Container, inject, interfaces } from "inversify";
import { autoProvide, provide, fluentProvide, buildProviderModule } from "inversify-binding-decorators";

const iocContainer = new Container();
iocContainer.load(buildProviderModule());

const provideSingleton = function(
    identifier: string | symbol | interfaces.Newable<any> | interfaces.Abstract<any>
  ) {
      return fluentProvide(identifier)
        .inSingletonScope()
        .done();
  };

export { iocContainer, autoProvide, provide, inject, provideSingleton };
