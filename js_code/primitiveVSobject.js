const primitive = 0;

const increasePrimitive = (primitive) => {
  primitive += 1;
};

increasePrimitive(primitive);

// console.log(primitive);

const object = { count: 0 };
const increaseObject = (object) => {
  object.count += 1;
};

increaseObject(object);

console.log(object.count);
