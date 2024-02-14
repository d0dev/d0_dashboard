module.exports = (sequelize, Sequelize) => {
  const Test = sequelize.define("test", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    },
    test: {
      type: Sequelize.BOOLEAN
    },
    test3: {
      type: Sequelize.BOOLEAN
    }
  });

  return Test;
};
