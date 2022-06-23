function LinkedListPlayGround() {
	class LinkedList {
		constructor(head=null) {
			this.head = head;
		}
	
		size() {
			let count = 0;
			let node = this.head;
			while(node) {
				count++;
				node = node.next
			}
			return count;
		}
	  
		clear() {
			this.head = null;
		}
	
		getLast() {
			let node = this.head;
			do {
				if (node.next === null)  {
					return node.data;
				} else {
					node = node.next;
				}
			} while (node);
		}
	
		insertStart(val) {
			let newHead = new ListNode(val);
			newHead.next = this.head;
			this.head = newHead;
			return newHead;
		}
	
		insertAt(val, index) {
			let node = new ListNode(val);
			let current = this.head;
			let count = 0;
			let res;
			
			if(index == 0) {
				node.next = this.head;
				this.head = node;
			} else {
				node.next = this.head;
				this.head = node;
				do {
					count = count + 1;
					if (node.next) {
						node = node.next;
					} else {
						return res =  'I am unable to insert at invalid index.';
					}
					if (index === count) {
							// return res =  `Succesfully inserted ${val} at index ${index}.`
							return printList();
						}
					} while (node !== null);	                   
				} 
			    
			res = `Succesfully inserted ${val} at index ${index}. ` ;
			return this.head.printList();
		}
	
		add(val) {
			let node = new ListNode(val);
			let count = 0;
			let current = this.head;
			
			if (current === null) {
				current = node;
			} else {
				do {
					if (current.next == null) {
						current.next = node;
						return `Succesfully added ${node.data} at index ${count}.`;
					} 
					count = count +1;
					current = current.next;
				} while (current !== null)	
			}
		}
	
		printList() {
			let node = this.head;
			while (node) {
				console.log(node.data + ' ');
				node = node.next;
			}
		}
	}
	
	class ListNode{
		constructor(data) {
			this.data = data
			this.next = null
		}
	}
	const node1 = new ListNode(2);
	const node2 = new ListNode(4);
	const node3 = new ListNode(6);
	node1.next = node2;
	node2.next = node3;

	let list = new LinkedList(node1);
	list.add(44);
	list.add(9);
	const j =list.add(34);
	return list.insertAt(90,3);
}

const t =LinkedListPlayGround();
console.log(t)



