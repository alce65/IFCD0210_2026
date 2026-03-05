x: int;
x = 22;
x = 'Pepe'; // Error: Type 'string' is not assignable to type 'number'.

y: int = 22;
y = true; // Error: Type 'boolean' is not assignable to type 'number'.  


class Person {

    public string name;
    private int age;

    Person(name, age) {
        this.name = name;
        this.age = age
    }

    greetings() {
        print('Soy ${this.name} y  tengo ${this.age} años')
    }

}

class PersonPus extends Person {
    string job
}

Person person1 = new Person('Charlie', 28);
PersonPlus person2 = new PersonPlus('Dave', 32);

person2.job = "Developer"
