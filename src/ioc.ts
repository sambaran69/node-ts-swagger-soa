import { Container, inject, injectable, interfaces, decorate } from "inversify";
import { autoProvide, fluentProvide, provide } from "inversify-binding-decorators";
import "reflect-metadata";
import { Controller } from "tsoa";

decorate(injectable(), Controller);

// type Identifier = string | symbol | interfaces.Newable<any> | interfaces.Abstract<any>;
type ArgTypes<Fn extends Function> = Fn extends (...args: infer A) => any
  ? A
  : never;

type Identifier = ArgTypes<typeof fluentProvide>[0];

const provideSingleton = (identifier: Identifier) => {
    return fluentProvide(identifier)
        .inSingletonScope()
        .done();
};

const iocContainer = new Container();

export { iocContainer, autoProvide, provide, inject, provideSingleton, injectable };
