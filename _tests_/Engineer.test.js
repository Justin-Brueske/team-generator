const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  
  describe("Engineer object instantiation", () => {
    it("Creates an object with name, id, email, and github properties", () => {
      const engineer = new Engineer("John Smith", 1, "jsmith@gmail.com", "gitjohn");

      expect(engineer).toBeInstanceOf(Engineer);
      expect(engineer.name).toEqual("John Smith");
      expect(engineer.id).toEqual(1);
      expect(engineer.email).toEqual("jsmith@gmail.com");
      expect(engineer.github).toEqual("gitjohn");
    });
  });
  
  describe("getName", () => {
    it("Should return the object's name property", () => {
      const engineer = new Engineer("John Smith", 1, "jsmith@gmail.com", "gitjohn");

      expect(engineer.getName()).toEqual("John Smith");
    });
  });
  
  describe("getId", () => {
    it("Should return the object's id property", () => {
      const engineer = new Engineer("John Smith", 1, "jsmith@gmail.com", "gitjohn");

      expect(engineer.getId()).toEqual(1);
    });
  });
  
  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const engineer = new Engineer("John Smith", 1, "jsmith@gmail.com", "gitjohn");

      expect(engineer.getEmail()).toEqual("jsmith@gmail.com");
    });
  });
 
  describe("getGithub", () => {
    it("Should return the object's github property", () => {
      const engineer = new Engineer("John Smith", 1, "jsmith@gmail.com", "gitjohn");

      expect(engineer.getGithub()).toEqual("gitjohn");
    });
  });
  
  describe("getRole", () => {
    it("Should return the string 'Engineer", () => {
      const engineer = new Engineer("John Smith", 1, "jsmith@gmail.com", "gitjohn");

      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});