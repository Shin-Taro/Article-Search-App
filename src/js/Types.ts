type Preset = {
  name:string,
  value:string,
  isActive:boolean,
  id:string
};

type SendPreset = {
  name:string,
  value:string,
  isActive:boolean
};

type Content = JSX.Element | JSX.Element[]