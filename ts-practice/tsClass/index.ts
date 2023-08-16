interface IPerson {
	firstName: string;
	lastName: string;
	age?: number;
	fullName?: () => void;
	gender: GenderType;
}

interface ICountry {
	name: string;
	continent: string;
}

const countries: ICountry[] = [
	{
		name: 'Nigeria',
		continent: 'Africa',
	},
];

const friuts: number[] = [8];

const age: number = 30;

type PersonType = {
	firstName: string;
	lastName: string;
	age?: number;
	fullName?: () => void;
	gender: GenderType;
};

enum Gender {
	Male = 'Male',
	Female = 'Female',
}

type GenderType = Gender.Male | Gender.Female;

const personDetails: Partial<IPerson> = {
	firstName: 'John',
	lastName: 'Doe',
	fullName: () => `${this.firstName} ${this.lastName}`,
	gender: Gender.Male,
};

const greetingMessage: string = 'Hello from typescript';
