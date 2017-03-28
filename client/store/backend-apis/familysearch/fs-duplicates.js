//import fsClient from './fsclient.js';
//import FSTraversal from 'fs-traversal';

/**
 * traverse the FamilySearch tree looking for possible duplicates
 * @param {Number} personId Start person
 * @param {Number} direction ('Ancestors' | 'Descendants').
 * @param {Number} generations Number of generations to search
 * @param {Boolean} includeImmediateFamilies The second number.
 * @param {number} maxDuplicates The second number.
 */
function findPossibleDuplicates(personId, direction, generations, includeImmediateFamilies, maxDuplicates ) {
	console.log(personId);
	console.log(generations);
	console.log(includeImmediateFamilies);
	console.log(maxDuplicates);
/*
	const traversal = new FSTraversal(fsClient)
		.order('wrd')
		.filter('ancestry')
		.concurrency(10)
		.limit(30)
		.person(function(person) {
			console.log('visited ' + person.getDisplayName());
			console.log('relationship: ' + traversal.relationshipTo(person.id));
		})
		.parent(function(parent, child){
			console.log(child.getDisplayName() + ' is the child of ' + parent.getDisplayName());
		})
		.child(function(child, mother, father, childRelationship){
			console.log('child:'+child.getDisplayName());
			console.log('mother:'+mother.getDisplayName());
			console.log('father:'+father.getDisplayName());
		})
		.marriage(function(wife, husband, marriage){
			console.log(wife.getDisplayName()+' married ' + husband.getDisplayName());
		})
		.error(function(personId, error){
			console.error('Something went wrong fetching person ' + personId);
			console.error(error);
		})
		.done(function(){
			console.log('Traversal Complete!');
		});

	console.log('status: ' + traversal.status());

	traversal.start();

	setTimeout(function(){
		console.log('status: ' + traversal.status());
		console.log('pausing traversal');
		traversal.pause();

		setTimeout(function(){
			console.log('status: ' + traversal.status());
			console.log('resuming traversal');
			traversal.resume();

		}, 5000);

	}, 3000);
*/
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


export {findPossibleDuplicates};
