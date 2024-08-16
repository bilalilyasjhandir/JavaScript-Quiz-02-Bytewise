function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

const object1 = { name: "Bilal", age: 20, city: "Bahawalpur" };
const object2 = { age: 25, occupation: "Student", city: "Multan" };
const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject);  