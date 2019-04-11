import { Container, inject, interfaces } from "inversify";
import { autoProvide, buildProviderModule, fluentProvide, provide } from "inversify-binding-decorators";
import "reflect-metadata";

const iocContainer = new Container();
iocContainer.load(buildProviderModule());

const provideSingleton = (identifier: string | symbol | interfaces.Newable<any> | interfaces.Abstract<any>) => {
    return fluentProvide(identifier)
        .inSingletonScope()
        .done();
  };

export { iocContainer, autoProvide, provide, inject, provideSingleton };
