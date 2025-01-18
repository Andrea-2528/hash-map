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

	hash(key) {
		let hashKey = 0;
		const prime = 11;
		for (let i = 0; i < key.length; i++) {
			hashKey = key.charCodeAt(i) + prime * hashKey;
		}
		return hashKey % this.capacity;
	}

    


}
