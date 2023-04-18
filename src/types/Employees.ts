export interface Employee{
    id:number;
    birthdate:string;
    firstName:string;
    lastName:string;
    gender:string;
    hiredate:string;
  }
  export interface Answer{
    _embedded:Embedded;
    _links: Links;
    page:any;
  }
  export interface Links{
    self:Link;
    first:Link;
    prev:Link;
    next:Link;
    last:Link;
    profile:Link;
  }
  export interface Link {
    href: string;
  }
  export interface Embedded{
    employees:Employee[];
  }