import mongoose from 'mongoose';
import Post from './models/post';
import TaskStep from './models/taskStep';

export default function () {
  Post.count().exec((err, count) => {
    if (count === 0) {

      const content1 = `Sed ut perspiciatis unde omnis iste natus error
        sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
        qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
        ipsum quia dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum`;

      const content2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum. Sed ut perspiciatis unde omnis iste natus error
        sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
        qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
        ipsum quia dolor sit amet.`;

      const post1 = new Post({ name: 'Admin', title: 'Hello MERN', slug: 'hello-mern', cuid: 'cikqgkv4q01ck7453ualdn3hd', content: content1 });
      const post2 = new Post({ name: 'Admin', title: 'Lorem Ipsum', slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });

      Post.create([post1, post2], (error) => {
        if (!error) {
          // console.log('ready to go....');
        }
      });

    }

  });

  TaskStep.count().exec((err, count) => {
    console.log( count );
    if (count === 0) {

      

      const arTaskStep = [
        new TaskStep({
          description: 'Add 8 g of dehydrated TSA powder to 200 mL of distilled water',
          timeRequired: 10,
          cuidDependency: null,
          comment: null,
          cuid: 'cikqgkv4q01ck7453ualdn3hi'
        }),
        new TaskStep({
          description: 'Heat gently and mix until powder is dissolved',
          timeRequired: 10,
          cuidDependency: 'cikqgkv4q01ck7453ualdn3hi',
          comment: null,
          cuid: 'cikqgkv4q01ck7453ualdn3hj'
        }),
        new TaskStep({
          description: 'Adjust pH to 7.3 ± 0.2',
          timeRequired: 10,
          cuidDependency: 'cikqgkv4q01ck7453ualdn3hj',
          comment: null,
          cuid: 'cikqgkv4q01ck7453ualdn3hk'
        }),
        new TaskStep({
          description: 'Sterilize buy autoclaving for 15 minutes on liquid cycle',
          timeRequired: 30,
          cuidDependency: 'cikqgkv4q01ck7453ualdn3hk',
          comment: null,
          cuid: 'cikqgkv4q01ck7453ualdn3hl'
        }),
        new TaskStep({
          description: 'Pour or pipette 20 mL into each plate',
          timeRequired: 10,
          cuidDependency: 'cikqgkv4q01ck7453ualdn3hl',
          comment: null,
          cuid: 'cikqgkv4q01ck7453ualdn3hm'
        }),
        new TaskStep({
          description: 'Cool plates at room temperature until solid',
          timeRequired: 10,
          cuidDependency: 'cikqgkv4q01ck7453ualdn3hm',
          comment: null,
          cuid: 'cikqgkv4q01ck7453ualdn3hn'
        }),
        new TaskStep({
          description: 'Incubate plates for 1 day to check for contamination',
          timeRequired: 1440,
          cuidDependency: 'cikqgkv4q01ck7453ualdn3hn',
          comment: null,
          cuid: 'cikqgkv4q01ck7453ualdn3ho'
        }),
        new TaskStep({
          description: 'Put uncontaminated plates in a plastic bag',
          timeRequired: 10,
          cuidDependency: 'cikqgkv4q01ck7453ualdn3ho',
          comment: null,
          cuid: 'cikqgkv4q01ck7453ualdn3hp'
        }),
        new TaskStep({
          description: 'Store plastic bag at 4 °C',
          timeRequired: 10,
          cuidDependency: 'cikqgkv4q01ck7453ualdn3hp',
          comment: null,
          cuid: 'cikqgkv4q01ck7453ualdn3hq'
        })
      ];
      console.log(arTaskStep);
      for ( var i = 0; i < arTaskStep.length; i++ ) {
        var iTaskStep = arTaskStep[ i ];
        TaskStep.create( iTaskStep, ( error ) => {
          if ( !error ) {
            console.log('ready to go....');
          } else {
            console.log( error );
          }
        });
      }

    }

  });

}
