class Person {
    name = '';
    age = 0;
    gender = '';
    adress = '';

    introduce() {
        console.log(`"My name is ${this.name}, I am ${this.age} years old, I am a ${this.gender}, and I live in ${this.adress}."`);
    }
    isAdult() {
        if (this.age >= 18) {
            return true;
        } else {
            return false;
        }
    }
    updateAddress(newAddress) {
        this.adress = newAddress;
    }
    equals(otherPerson) {
        return (
            this.name === otherPerson.name &&
            this.age === otherPerson.age &&
            this.gender === otherPerson.gender &&
            this.adress === otherPerson.adress
        );
    }
    toString() {
        return `${this.name} (${this.age}, ${this.gender}, ${this.adress})`;
      }
      
}
let person1 = new Person();
person1.name = 'Nguyen Ngoc Doanh';
person1.age = 21;
person1.gender = 'Nam';
person1.adress = 'Ha Noi';
person1.introduce();
person1.updateAddress('Da Nang');
person1.introduce();
person1.isAdult();

let person2 = new Person();
person2.name = 'Tran Thi B';
person2.age = 17;
person2.gender = 'Nu';
person2.adress = 'Hai Phong';
person2.introduce();
person2.updateAddress('Quang Ninh');
person2.introduce();
person2.isAdult();

if (person1.age > person2.age) {
    console.log(`${person1.name} is older than ${person2.name}`);
} else if (person1.age < person2.age) {
    console.log(`${person2.name} is older than ${person1.name}`);
}

if (person1.equals(person2)) {
    console.log('person1 is the same as person2');
} else {
    console.log('person1 is different from person2');
}

const p =[person1, person2];

const adaults = p.filter(person => person.isAdult());

console.log('Adults:');
adaults.forEach(person => console.log(person.toString()));


