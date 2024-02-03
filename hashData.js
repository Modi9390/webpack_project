class HashMap
{
    constructor(size = 10){
        this.size = size;
        this.table = new Array(size).fill(null).map(() => []);
    }
    hash(key)
    {
        let hash = 0;
        for (let i = 0; i < key.length; i++)
        {
            hash = (hash << 5) + key.charCodeAt(i);
            hash = hash && hash;
            hash = Math.abs(hash);
            hash = hash % this.size;

        }
        return hash;
    }
    set(key, value)
    {
        let index = this.hash(key);

        this.table[index].push({key, value});
    }
    get(key)
    {
        let index = this.hash(key);
        let backts = this.table[index]

        for (const item of backts)
        {
            if (item.key === key)
            {
                return item.value;
            }
        }
        return undefined;
    }
    has(key)
    {
        let index = this.hash(key);
        let backts = this.table[index]
        let found = false;
        for ( let i = 0; i < backts.length; i++)
        {
            if (backts[i].key === key)
            {
                found = true;
                console.log(`key [${key}] exist`);
                return backts[i].value
            }else {
                console.log(`key [${key}] does not exist`);
            }

        }
        return found;
    }
    remove(key)
    {
        let index = this.hash(key);
        let backts = this.table[index]

        for ( let i = 0; i < backts.length; i++)
        {
            if (backts[i].key === key)
            {
                backts.splice(i, 1);
                console.log(`key [${key}] was removed`);
                return;
            }else {

                console.error(`key [${key}] does not exist in table`);
            }
        }
    }
    // print the number of keys in the table
    length()
    {
        let count = 0;
        for ( let i = 0; i < this.table.length; i++ )
        {
            count += this.table[i].length;


        }
        console.log(`number of stored keys in the hash is [${count}] `);

        return count;
    }
    clear()
    {
        for (let i = 0; i < this.table.length; i++)
        {
            if (!this.table[i].length && this.table[i].length === 0)
            {
                 console.error("there no entries in the hash map.")


            }else{

                    this.table[i].splice(0, this.table[i].length);

            }
        }
    }
    keys()
    {
        let arr = [];
        for ( let i = 0; i < this.table.length; i++ )
        {
            for (const entry of this.table[i])
            {
                arr.push(entry.key);
            }
        }
        console.log("the keys are: ", arr)
        return arr;
    }
    values()
    {
        let arr = [];
        for ( let i = 0; i < this.table.length; i++ )
        {
            for (const entry of this.table[i])
            {
                arr.push(entry.value);
            }
        }
        console.log("the value of keys are: ", arr)
        return arr;

    }
    entries()
    {
        let arr = [];
        for ( let i = 0; i < this.table.length; i++ )
        {
            for (const entry of this.table[i])
            {
                arr.push([entry.key, entry.value]);
            }
        }
        console.log("the value of keys are: ", arr)
        return arr;
    }

}


let myTable = new HashMap();

myTable.set("name", "Modibo");
myTable.set("age", 20);
//myTable.remove("age");
myTable.has("name");
console.log(myTable.get("name"));
console.log(myTable.get("age"));
myTable.keys()
myTable.values()
myTable.entries()
//myTable.clear();
myTable.length();
//console.log(myTable)



