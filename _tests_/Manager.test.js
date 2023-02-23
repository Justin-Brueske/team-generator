const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager", () => {
  
  describe("Manager object instantiation", () => {
    it("Creates an object with name, id, email, and officeNumber properties", () => {
      const manager = new Manager("John Smith", 1, "jsmith@gmail.com", 456-789-4585);

      expect(manager).toBeInstanceOf(Manager);
      expect(manager.name).toEqual("John Smith");
      expect(manager.id).toEqual(1);
      expect(manager.email).toEqual("jsmith@gmail.com");
      expect(manager.officeNumber).toEqual(456-789-4585);
    });
  });

  describe("getName", () => {
    it("Should return the object's name property", () => {
      const manager = new Manager("John Smith", 1, "jsmith@gmail.com", 456-789-4585);

      expect(manager.getName()).toEqual("John Smith");
    });
  });

  describe("getId", () => {
    it("Should return the object's id property", () => {
      const manager = new Manager("John Smith", 1, "jsmith@gmail.com", 456-789-4585);

      expect(manager.getId()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const manager = new Manager("John Smith", 1, "jsmith@gmail.com", 456-789-4585);

      expect(manager.getEmail()).toEqual("jsmith@gmail.com");
    });
  });
  
  describe("getOffice", () => {
    it("Should return the object's officeNumber property", () => {
      const manager = new Manager("John Smith", 1, "jsmith@gmail.com", 456-789-4585);

      expect(manager.getOfficeNumber()).toEqual(456-789-4585);
    });
  });

  describe("getRole", () => {
    it("Should return the string 'Manager'", () => {
      const manager = new Manager("John Smith", 1, "jsmith@gmail.com", 456-789-4585);

      expect(manager.getRole()).toEqual("Manager");
    });
  });
});