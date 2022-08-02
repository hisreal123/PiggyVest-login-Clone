export interface AllProps {
  LabelProps: {
    type: string;
    FullName: string;
    Email: string | null;
    Phone: number | null;
    Password: string;
    Referrer?: string | number | any;
    label: string;
  };

  InputProps: {
    name: string;
    value: string | number;
    placeholder: string;
  };
}
[];
