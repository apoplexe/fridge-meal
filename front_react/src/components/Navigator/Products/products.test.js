import { fromage, ProductsList } from './Products';

test('return fromage', ()=>{
    console.log(fromage());
    expect(fromage()).toBe('fromage');
});
