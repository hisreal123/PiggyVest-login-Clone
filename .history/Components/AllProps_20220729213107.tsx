export interface AllProps {
  LabelProps: {
    type: string;
    FullName: string;
    Email: string ;
    Phone?: number ;
    Password?: string;
    Referrer?: string | number | any;
    label?: string;
  };

  InputProps: {
    name: string;
    value: string | number;
    placeholder: string;
  };
}
[];
