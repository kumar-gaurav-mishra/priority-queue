'use strict';
const chai = require('chai');
chai.should();
let PriorityQueue = require('./index');
describe('Priority Queue', () => {
  describe('Instantiation', () => {
    let pq = new PriorityQueue();
    it('priority queue should be object', () => {
      (typeof pq === 'object').should.be.equals(true);
    });
    it('priority queue should be instance of PriorityQueue', () => {
      (pq instanceof PriorityQueue).should.be.equals(true);
    });
  });
  describe('Enqueue Method', () => {
    let pq = new PriorityQueue();
    pq.enqueue('walk the dog', 10);
    it('priority queue should have one element', () => {
      (pq.values.length === 1).should.be.equals(true);
    });
    it("priority queue should have first elemet's priority of 10", () => {
      (pq.values[0].priority === 10).should.be.equals(true);
    });
    it('priority queue should have root element with priority of 1', () => {
      pq = new PriorityQueue();
      pq.enqueue('walk the dog', 10);
      pq.enqueue('Serious cold', 1);
      (pq.values[0].priority === 1).should.be.equals(true);
    });
    it('priority queue should return undefined in absence of element or priority while calling enque function', () => {
      (pq.enqueue() === undefined).should.be.equals(true);
    });
  });
  describe('Dequeue Method', () => {
    it('pq should have four element', () => {
      let pq = new PriorityQueue();
      let events = [
        { event: 'Walk The dog', priority: 10 },
        { event: 'Eat hot dog', priority: 4 },
        { event: 'coding', priority: 1 },
        { event: 'Prepare Bazuka for launch', priority: 0 }
      ];
      events.forEach(val => pq.enqueue(val.event, val.priority));
      pq.values.length.should.be.equals(4);
    });
    it("pq should have first elemet's priority of 0", () => {
      let pq = new PriorityQueue();
      let events = [
        { event: 'Walk The dog', priority: 10 },
        { event: 'Eat hot dog', priority: 4 },
        { event: 'coding', priority: 1 },
        { event: 'Prepare Bazuka for launch', priority: 0 }
      ];
      events.forEach(val => pq.enqueue(val.event, val.priority));
      (pq.values.length === 4).should.be.equals(true);
      (pq.values[0].priority === 0).should.be.equals(true);
    });
    it('pq should have root element with priority of 1', () => {
      let pq = new PriorityQueue();
      let events = [
        { event: 'Walk The dog', priority: 10 },
        { event: 'Eat hot dog', priority: 4 },
        { event: 'coding', priority: 1 },
        { event: 'Prepare Bazuka for launch', priority: 0 }
      ];
      events.forEach(val => pq.enqueue(val.event, val.priority));
      pq.dequeue();
      (pq.values.length === 3).should.be.equals(true);
      (pq.values[0].priority === 1).should.be.equals(true);
    });
    it('priority queue should return undefined in absence of element or priority while calling enque function', () => {
      let pq = new PriorityQueue();
      (pq.dequeue() === undefined).should.be.equals(true);
    });
    it('priority queue should return one element with the priority of 1', () => {
      let pq = new PriorityQueue();
      pq.enqueue(10, 1);
      (pq.dequeue().priority === 1).should.be.equals(true);
    });
  });
});
