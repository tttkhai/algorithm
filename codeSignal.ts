// Level 1
// The basic level of the in-memory database contains records. Each record can be accessed with a unique identifier key, which is of string type. A record contains several field-value pairs, with field as string type and value as integer type. All operations have a timestamp parameter — a stringified timestamp in milliseconds. It is guaranteed that all timestamps are unique and are in a range from 1 to 109. Operations will be given in order of strictly increasing timestamps. Timestamps will be needed starting from Level 3.

// set(timestamp, key, field, value) — should insert a field-value pair to the record associated with key. If the field in the record already exists, replace the existing value with the specified value. If the record does not exist, a new one is created.

// compareAndSet(timestamp, key, field, expectedValue, newValue) — should update the value of field in the record associated with key to newValue if the current value equals expectedValue. If expectedValue does not match the current value, or either key or field does not exist, this operation is ignored. This operation should return true if the field was updated and false otherwise.

// compareAndDelete(timestamp, key, field, expectedValue) — should remove the field field in the record associated with key if the previous value equals expectedValue. If expectedValue does not match the current value, or either key or field does not exist, this operation is ignored. This operation should return true if the field was removed and false otherwise.

// get(timestamp, key, field) — should return the value contained within field of the record associated with key. If the record or the field does not exist, should return null.

// Examples
// The example below shows how these operations should work (the section is scrollable to the right):

// Queries	Explanations
// set(0, "A", "B", 4)
// set(1, "A", "C", 6)
// compareAndSet(2, "A", "B", 4, 9)
// compareAndSet(3, "A", "C", 4, 9)
// compareAndDelete(4, "A", "C", 6)
// get(5, "A", "C")
// get(6, "A", "B")
// database state: {"A": {"B": 4}}
// database state: {"A": {"B": 4, "C": 6}}
// returns true; database state: {"A": {"B": 9, "C": 6}}
// returns false; field "C" in record "A" currently has a value of 6, so the operation is ignored
// returns true; database state: {"A": {"B": 9}}
// returns null; field "C" in record "A" was previously deleted
// returns 9

class Database {
    database: Map<string, { [key: string]: number }>;

    constructor() {
        this.database = new Map<string, { [key: string]: number }>;
    }

    set(timestamp: number, key: string, field: string, value: number) {
        if (!this.database.has(key)) {
            this.database.set(key, { [field]: value });
            return this.database;
        }

        const currentValue = this.database.get(key);
        this.database.set(key, { ...currentValue, [field]: value });
        return this.database;
    }

    compareAndSet(timestamp: number, key: string, field: string, expectedValue: number, newValue: number) {
        if (!this.database.has(key)) {
            return false;
        }

        const value = this.database.get(key);
        if (value && value[field] === expectedValue) {
            this.database.set(key, { ...value, [field]: newValue });
            return true;
        }

        return false;
    }

    compareAndDelete(timestamp: number, key: string, field: string, expectedValue: number) {
        if (!this.database.has(key)) {
            return false;
        }

        const value = this.database.get(key);
        if (value && value[field] !== expectedValue) {
            return false;
        }

        if (value) {
            delete value[field];
            this.database.set(key, value);
        }
        return true;
    }

    get(timestamp: number, key: string, field: string): number | null {
        if (!this.database.has(key)) {
            return null;
        }
        return this.database.get(key)?.field || null;
    }
}

const a = new Database();
console.log(a.set(0, "A", "B", 4));
console.log(a.set(1, "A", "C", 6));
console.log(a.compareAndSet(2, "A", "B", 4, 9));
console.log(a.compareAndSet(3, "A", "C", 4, 9));
console.log(a.compareAndDelete(4, "A", "C", 6));
console.log(a.get(5, "A", "C"));
console.log(a.get(6, "A", "B"));
