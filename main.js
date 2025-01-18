import { HashMap } from "./index.js";

const hashMap = new HashMap();

//TEST
console.log(
	"TESTS -------------------------------------------------------------"
);

// set ()
console.log(
	"set() -------------------------------------------------------------"
);
hashMap.set("apple", "red");
hashMap.set("banana", "yellow");
hashMap.set("carrot", "orange");
hashMap.set("dog", "brown");
hashMap.set("elephant", "gray");
hashMap.set("frog", "green");
hashMap.set("grape", "purple");
hashMap.set("hat", "black");
hashMap.set("ice cream", "white");
hashMap.set("jacket", "blue");
hashMap.set("kite", "pink");
hashMap.set("lion", "golden");

console.log(hashMap.entries());
console.log(hashMap.lenght());

// overwrite
console.log(
	"overwrite set() -------------------------------------------------------------"
);
hashMap.set("apple", "OVERWRITTEN1");
hashMap.set("banana", "OVERWRITTEN2");
console.log(hashMap.entries());
console.log(hashMap.lenght());

// expand map
console.log(
	"expand set() -------------------------------------------------------------"
);
hashMap.set("moon", "silver");
hashMap.set("night", "black");
hashMap.set("ocean", "blue");
hashMap.set("sun", "yellow");
hashMap.set("tree", "green");
hashMap.set("water", "blue");

console.log(hashMap.entries());
console.log(hashMap.lenght());

// get()
console.log(
	"get() -------------------------------------------------------------"
);
console.log(hashMap.get("moon"));

// has()
console.log(
	"has() -------------------------------------------------------------"
);
console.log("Moon:");
console.log(hashMap.has("moon"));
console.log("Motorbike:");
console.log(hashMap.has("motorbike"));

// remove()
console.log(
	"remove() -------------------------------------------------------------"
);
console.log("Remove apple:");
hashMap.remove("apple");
console.log(hashMap.entries());
console.log(hashMap.lenght());

// keys()
console.log(
	"keys() -------------------------------------------------------------"
);
console.log(hashMap.keys());

// values()
console.log(
    "values() -------------------------------------------------------------"
);
console.log(hashMap.values());

// clear()
console.log(
    "clear() -------------------------------------------------------------"
);
hashMap.clear();
console.log(hashMap.entries());
console.log(hashMap.lenght());
