const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern", () => {
  
  describe("Intern object instantiation", () => {
    it("Creates an object with name, id, email, and school properties", () => {
      const intern = new Intern("John Smith", 1, "jsmith@gmail.com", "NEI");

      expect(intern).toBeInstanceOf(Intern);
      expect(intern.name).toEqual("John Smith");
      expect(intern.id).toEqual(1);
      expect(intern.email).toEqual("jsmith@gmail.com");
      expect(intern.school).toEqual("NEI");
    });
  });
  
  describe("getName", () => {
    it("Should return the object's name property", () => {
      const intern = new Intern("John Smith", 1, "jsmith@gmail.com", "NEI");

      expect(intern.getName()).toEqual("John Smith");
    });
  });
 
  describe("getId", () => {
    it("Should return the object's id property", () => {
      const intern = new Intern("John Smith", 1, "jsmith@gmail.com", "NEI");

      expect(intern.getId()).toEqual(1);
    });
  });
  
  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const intern = new Intern("John Smith", 1, "jsmith@gmail.com", "NEI");

      expect(intern.getEmail()).toEqual("jsmith@gmail.com");
    });
  });

  describe("getSchool", () => {
    it("Should return the object's school property", () => {
      const intern = new Intern("John Smith", 1, "jsmith@gmail.com", "NEI");

      expect(intern.getSchool()).toEqual("NEI");
    });
  });
  
  describe("getRole", () => {
    it("Should return the string 'Intern", () => {
      const intern = new Intern("John Smith", 1, "jsmith@gmail.com", "NEI");

      expect(intern.getRole()).toEqual("Intern");
    });
  });
});