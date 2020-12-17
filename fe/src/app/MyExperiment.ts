import * as PlanOut from 'planout';

interface Identifier {
  userId: number;
}

interface Configuration {
  buttonColor: string;
  buttonText: string;
}

export class MyExperiment extends PlanOut.Experiment<Identifier, Configuration> {

  configureLogger(): void { return; }

  log(log: any): any { console.log(log); }

  previouslyLogged(): boolean { return this._exposureLogged; }

  setup(): any { this.setName('XP'); }

  getParamNames(): any { return this.getDefaultParamNames(); }

  assign(params: any, args: Identifier): any {

    params.set('buttonColor', new PlanOut.Ops.Random.UniformChoice({ choices: ['accent', 'primary', 'warn', ''], unit: args.userId }));
    params.set('buttonText', new PlanOut.Ops.Random.WeightedChoice({ choices: ['GO', 'CLICK ME!'], weights: [2, 8], unit: args.userId }));

  }

}
