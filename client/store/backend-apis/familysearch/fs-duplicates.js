import FSTraversal from 'fs-traversal';
import { fsClient } from './fsclient';

/**
 * traverse the FamilySearch tree looking for possible duplicates
 * @param {Number} personId Start person
 * @param {Number} direction ('Ancestors' | 'Descendants').
 * @param {Number} generations Number of generations to search
 * @param {Boolean} includeImmediateFamilies The second number.
 * @param {Number} maxDuplicates The second number.
 * @return (Number) retVal The return val.
 */
export default function findPossibleDuplicates(
  personId, direction, generations, includeImmediateFamilies, maxDuplicates) {
  console.log(personId);
  console.log(generations);
  console.log(includeImmediateFamilies);
  console.log(maxDuplicates);

  const traversal = new FSTraversal(fsClient)
    .order('wrd')
    .filter('ancestry')
    .concurrency(10)
    .limit(30)
    .person((person) => {
      console.log(`visited ${person.getDisplayName()}`);
      console.log(`relationship: ${traversal.relationshipTo(person.id)}`);
    })
    .parent((parent, child) => {
      console.log(`${child.getDisplayName()} is the child of ${parent.getDisplayName()}`);
    })
    .child((child, mother, father, childRelationship) => {
      console.log(`child:${child.getDisplayName()}`);
      console.log(`mother:${mother.getDisplayName()}`);
      console.log(`father:${father.getDisplayName()}`);
      console.log(`childRelationship:${childRelationship}`);
    })
    .marriage((wife, husband, marriage) => {
      console.log(`${wife.getDisplayName()} married ${husband.getDisplayName()}`);
      console.log(`marriage: ${marriage}`);
    })
    .error((person, error) => {
      console.error(`Something went wrong fetching person ${person}`);
      console.error(error);
    })
    .done(() => {
      console.log('Traversal Complete!');
    });

  console.log(`status: ${traversal.status()}`);

  traversal.start();

  console.log(`status: ${traversal.status()}`);

  setTimeout(() => {
    console.log(`status: ${traversal.status()}`);
    console.log('pausing traversal');
    traversal.pause();

    setTimeout(() => {
      console.log(`status: ${traversal.status()}`);
      console.log('resuming traversal');
      traversal.resume();
    }, 5000);
  }, 3000);

  return 4;
}

/**
 * Add two numbers.
 * @returns {number} The sum of the two numbers.
function traverseAncestors( ) {
  // https://familysearch.org/developers/docs/api/tree/Descendancy_resource
  console.log('traverseAncestors');
  return 4;

}
 */


/**
 * Add two numbers.
 * @returns {number} The sum of the two numbers.
function traverseDescendants( ) {
  // https://familysearch.org/developers/docs/api/tree/Descendancy_resource
  console.log('traverseDescendants');
  return 4;

}
 */

