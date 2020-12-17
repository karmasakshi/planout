import * as PlanOut from 'planout';

interface Identifier {
  userId: number;
}

interface Configuration {
  buttonColor: string;
  buttonText: string;
}

interface Log {
  event?: string;
  name?: string;
  time?: number;
  salt?: string;
  inputs?: Identifier;
  params?: Configuration;
  extra_data?: { [key: string]: any };
}

export class MyExperiment extends PlanOut.Experiment<Identifier, Configuration> {

  // Set up logging
  configureLogger(): void { return; }

  // Log
  log(log: Log): any { console.log(log); }

  // Avoid repeat logging
  previouslyLogged(): boolean { return this._exposureLogged; }

  setup(): any {
    this.setName('XP');
  }

  getParamNames(): any {
    return this.getDefaultParamNames();
  }

  assign(params: any, args: Identifier): any {

    params.set('buttonColor', new PlanOut.Ops.Random.UniformChoice({ choices: ['accent', 'primary', 'warn', ''], unit: args.userId }));
    params.set('buttonText', new PlanOut.Ops.Random.WeightedChoice({ choices: ['GO', 'CLICK ME!'], weights: [2, 8], unit: args.userId }));

  }

}
