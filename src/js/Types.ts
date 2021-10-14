type Preset = {
  name:string,
  value:string,
  isActive:boolean,
  id:string
};

type SendPreset = {
  name:string,
  query:string,
};

type Content = JSX.Element | JSX.Element[]