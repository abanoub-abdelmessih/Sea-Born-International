export interface ContainerSpec {
  external: { length: string; width: string; height: string };
  internal: { length: string; width: string; height: string };
  doorOpening: { width: string; height: string };
  weight: { tare: string; maxCargo: string; maxGross: string };
  capacity: string;
}

export interface Container {
  title: string;
  image: string;

  inside: string;
  specs: ContainerSpec;
}
