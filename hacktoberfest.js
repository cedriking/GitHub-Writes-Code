/* Showing participants in Javascript ES6 */

class Hacktoberfest {
  constructor() {
    this.participants = ['cedriking'];
  }
}

const hacktoberfest = new Hacktoberfest();
hacktoberfest.participants.map(participant => {
  console.log(`${participant} => https://github.com/${participant}`);
});
