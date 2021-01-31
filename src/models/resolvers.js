import { Cat } from './Cat.model';
export const resolvers = {
    Query: {
        hello: () => 'world',
        cats: () => Cat.find()
    },
    Mutation: {
        createCat: async (_, {name}) => {
            const kitty = new Cat({ name: name });
            await kitty.save();
            console.log(kitty);
            return kitty;
        }
    }
}
