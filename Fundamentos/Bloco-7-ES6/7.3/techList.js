function techList(technologies, name) {
    let techs;
    if (name !== undefined && technologies.length > 0) {
      techs = [];
      technologies.sort();
  
      for (let i = 0; i < technologies.length; i += 1) {
        techs.push({ tech: technologies[i] });
        techs[i].name = name;
      }
    } else {
      techs = 'Vazio!';
    }
    return techs;
  }
  module.exports = techList;