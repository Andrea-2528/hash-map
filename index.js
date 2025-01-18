export { HashMap };

class Node {
	constructor(key, value = null, next = null) {
		this.key = key;
		this.value = value;
		this.next = next;
	}
}

class HashMap {
	constructor() {
		this.bucketsArray = new Array(16).fill(null);
		this.loadFactor = 0.75;
		this.capacity = this.bucketsArray.length;
		this.occupied = 0;
	}

    // List of methods
    hash() {}
    resize() {}
    set() {}
    get() {}
    has() {}
    remove() {}
    lenght() {}
    clear() {}
    keys() {}
    values() {}
    entries() {}

	hash(key) {
		let hashKey = 0;
		const prime = 11;
		for (let i = 0; i < key.length; i++) {
			hashKey = key.charCodeAt(i) + prime * hashKey;
		}
		return hashKey % this.capacity;
	}

	resize() {
		const oldArray = this.bucketsArray;
		this.capacity *= 2;
		this.bucketsArray = new Array(this.capacity).fill(null);
		this.occupied = 0;

		oldArray.forEach((bucket) => {
			let tmp = bucket;
			while (tmp !== null) {
				this.set(tmp.key, tmp.value);
				tmp = tmp.next;
			}
		});
	}

	set(key, value) {
		if (this.occupied / this.capacity >= this.loadFactor) {
			this.resize();
		}
		const bucket = this.hash(key);
		if (!this.has(key)) {
			const newNode = new Node(key, value);
			if (this.bucketsArray[bucket] === null) {
				this.occupied += 1;
				this.bucketsArray[bucket] = newNode;
			} else {
				let tmp = this.bucketsArray[bucket];
				while (tmp.next !== null) {
					tmp = tmp.next;
				}
				tmp.next = newNode;
			}
		} else {
			let tmp = this.bucketsArray[bucket];
			while (tmp !== null && tmp.key !== key) {
				tmp = tmp.next;
			}
			if (tmp !== null) {
				tmp.value = value;
			}
		}
	}

	get(key) {
		const bucket = this.hash(key);
		let tmp = this.bucketsArray[bucket];
		while (tmp.key !== null && tmp.key !== key) {
			tmp = tmp.next;
		}
		if (tmp === null) {
			return null;
		}
		return tmp.value;
	}

	has(key) {
		const bucket = this.hash(key);
		let tmp = this.bucketsArray[bucket];
		while (tmp !== null) {
			if (tmp.key === key) {
				return true;
			}
			tmp = tmp.next;
		}
		return false;
	}

	remove(key) {
		const bucket = this.hash(key);
		let tmp = this.bucketsArray[bucket];
		let previous = null;

		while (tmp !== null && tmp.key !== key) {
			previous = tmp;
			tmp = tmp.next;
		}

		if (tmp === null) {
			return null;
		}

		if (previous === null && tmp.next === null) {
			this.occupied -= 1;
			this.bucketsArray[bucket] = tmp.next;
		} else if (previous === null) {
			this.bucketsArray[bucket] = tmp.next;
		} else {
			previous.next = tmp.next;
		}
	}

	lenght() {
		let counter = 0;
		this.bucketsArray.forEach((bucket) => {
			let tmp = bucket;
			if (bucket !== null) {
				counter += 1;
				while (tmp.next !== null) {
					counter += 1;
					tmp = tmp.next;
				}
			}
		});
		return counter;
	}

	clear() {
		this.bucketsArray = new Array(16).fill(null);
		this.occupied = 0;
	}

	keys() {
		const arrayOfKeys = [];
		this.bucketsArray.forEach((bucket) => {
			let tmp = bucket;
			if (bucket !== null) {
				arrayOfKeys.push(tmp.key);
				while (tmp.next !== null) {
					tmp = tmp.next;
					arrayOfKeys.push(tmp.key);
				}
			}
		});
		return arrayOfKeys;
	}

	values() {
		const arrayOfValues = [];
		this.bucketsArray.forEach((bucket) => {
			let tmp = bucket;
			if (bucket !== null) {
				arrayOfValues.push(tmp.value);
				while (tmp.next !== null) {
					tmp = tmp.next;
					arrayOfValues.push(tmp.value);
				}
			}
		});
		return arrayOfValues;
	}

	entries() {
		const arrayOfEntries = [];
		this.bucketsArray.forEach((bucket) => {
			let tmp = bucket;
			if (bucket !== null) {
				arrayOfEntries.push([tmp.key, tmp.value]);
				while (tmp.next !== null) {
					tmp = tmp.next;
					arrayOfEntries.push([tmp.key, tmp.value]);
				}
			}
		});
		return arrayOfEntries;
	}
}
