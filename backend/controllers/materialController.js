const asyncHandler = require("express-async-handler");
const Material = require("../models/materialModel");

//@description     Get or Search all materials
//@route           GET /api/material?search=
//@access          Public
const allMaterials = asyncHandler(async (req, res) => {
  const searchKeyword = req.query.search;
  console.log(searchKeyword);

  // Build the query object
  const query = searchKeyword ? { name: searchKeyword } : {};

  // async function getInfo() {
  //   const info = {};
  //   try {
  //     Material.aggregate([
  //       {
  //         $match: query,
  //       },
  //       {
  //         $group: {
  //           _id: null,
  //           minValue: {
  //             $min: {
  //               $convert: {
  //                 input: "$d31",
  //                 to: "double",
  //                 onError: 0,
  //                 onNull: 0,
  //               },
  //             },
  //           },
  //         },
  //       },
  //     ])
  //       .exec()
  //       .then((result) => {
  //         if (result.length > 0) {
  //           info.minD31 = result[0].minValue;
  //         } else {
  //           console.log("No documents found.");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });

  //     // max d31
  //     Material.aggregate([
  //       {
  //         $match: query,
  //       },
  //       {
  //         $group: {
  //           _id: null,
  //           maxValue: {
  //             $max: {
  //               $convert: {
  //                 input: "$d31",
  //                 to: "double",
  //                 onError: 0,
  //                 onNull: 0,
  //               },
  //             },
  //           },
  //         },
  //       },
  //     ])
  //       .exec()
  //       .then((result) => {
  //         if (result.length > 0) {
  //           info.maxD31 = result[0].maxValue;
  //         } else {
  //           console.log("No documents found.");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });

  //     //minimum d11
  //     Material.aggregate([
  //       {
  //         $match: query,
  //       },
  //       {
  //         $group: {
  //           _id: null,
  //           minValue: {
  //             $min: {
  //               $convert: {
  //                 input: "$d11",
  //                 to: "double",
  //                 onError: 0,
  //                 onNull: 0,
  //               },
  //             },
  //           },
  //         },
  //       },
  //     ])
  //       .exec()
  //       .then((result) => {
  //         if (result.length > 0) {
  //           info.minD11 = result[0].minValue;
  //         } else {
  //           console.log("No documents found.");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });

  //     // max d11
  //     Material.aggregate([
  //       {
  //         $match: query,
  //       },
  //       {
  //         $group: {
  //           _id: null,
  //           maxValue: {
  //             $max: {
  //               $convert: {
  //                 input: "$d11",
  //                 to: "double",
  //                 onError: 0,
  //                 onNull: 0,
  //               },
  //             },
  //           },
  //         },
  //       },
  //     ])
  //       .exec()
  //       .then((result) => {
  //         if (result.length > 0) {
  //           info.maxD11 = result[0].maxValue;
  //         } else {
  //           console.log("No documents found.");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });

  //     // min synthesis Index
  //     Material.aggregate([
  //       {
  //         $match: query,
  //       },
  //       {
  //         $group: {
  //           _id: null,
  //           minValue: {
  //             $min: {
  //               $convert: {
  //                 input: "$synthesis_index",
  //                 to: "double",
  //                 onError: 0,
  //                 onNull: 0,
  //               },
  //             },
  //           },
  //         },
  //       },
  //     ])
  //       .exec()
  //       .then((result) => {
  //         if (result.length > 0) {
  //           info.minSynIndex = result[0].minValue;
  //         } else {
  //           console.log("No documents found.");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });

  //     // max syn index
  //     Material.aggregate([
  //       {
  //         $match: query,
  //       },
  //       {
  //         $group: {
  //           _id: null,
  //           maxValue: {
  //             $max: {
  //               $convert: {
  //                 input: "$synthesis_index",
  //                 to: "double",
  //                 onError: 0,
  //                 onNull: 0,
  //               },
  //             },
  //           },
  //         },
  //       },
  //     ])
  //       .exec()
  //       .then((result) => {
  //         if (result.length > 0) {
  //           info.maxSynIndex = result[0].maxValue;
  //         } else {
  //           console.log("No documents found.");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //     // min band gap
  //     Material.aggregate([
  //       {
  //         $match: query,
  //       },
  //       {
  //         $group: {
  //           _id: null,
  //           minValue: {
  //             $min: {
  //               $convert: {
  //                 input: "$Eg_pbe",
  //                 to: "double",
  //                 onError: 0,
  //                 onNull: 0,
  //               },
  //             },
  //           },
  //         },
  //       },
  //     ])
  //       .exec()
  //       .then((result) => {
  //         if (result.length > 0) {
  //           info.minBandGap = result[0].minValue;
  //         } else {
  //           console.log("No documents found.");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //     // max band gap
  //     Material.aggregate([
  //       {
  //         $match: query,
  //       },
  //       {
  //         $group: {
  //           _id: null,
  //           maxValue: {
  //             $max: {
  //               $convert: {
  //                 input: "$Eg_pbe",
  //                 to: "double",
  //                 onError: 0,
  //                 onNull: 0,
  //               },
  //             },
  //           },
  //         },
  //       },
  //     ])
  //       .exec()
  //       .then((result) => {
  //         if (result.length > 0) {
  //           info.maxBandGap = result[0].maxValue;
  //           console.log("asdfasdfasdfasdfasdfasdfasdfasdf", info);
  //         } else {
  //           console.log("No documents found.");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //     console.log("fucking", info);

  //     return info;
  //   } catch {}
  // }

  async function getMinMaxValue(columnName, minOrMax) {
    const pipeline = [
      {
        $match: query,
      },
      {
        $group: {
          _id: null,
          value: {
            [`$${minOrMax}`]: {
              $convert: {
                input: `$${columnName}`,
                to: "double",
                onError: 0,
                onNull: 0,
              },
            },
          },
        },
      },
    ];

    const result = await Material.aggregate(pipeline).exec();
    if (result.length > 0) {
      return result[0].value;
    } else {
      console.log(`No documents found for ${columnName} ${minOrMax}.`);
      return null;
    }
  }

  async function getInfo() {
    const info = {};

    try {
      const promises = [
        getMinMaxValue("d31", "min"),
        getMinMaxValue("d31", "max"),
        getMinMaxValue("d11", "min"),
        getMinMaxValue("d11", "max"),
        getMinMaxValue("synthesis_index", "min"),
        getMinMaxValue("synthesis_index", "max"),
        getMinMaxValue("Eg_pbe", "min"),
        getMinMaxValue("Eg_pbe", "max"),
      ];

      const [
        minD31,
        maxD31,
        minD11,
        maxD11,
        minSynIndex,
        maxSynIndex,
        minBandGap,
        maxBandGap,
      ] = await Promise.all(promises);

      info.minD31 = minD31;
      info.maxD31 = maxD31;
      info.minD11 = minD11;
      info.maxD11 = maxD11;
      info.minSynIndex = minSynIndex;
      info.maxSynIndex = maxSynIndex;
      info.minBandGap = minBandGap;
      info.maxBandGap = maxBandGap;

      console.log("info:", info);
      return info;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  // // send

  try {
    const materials = await Material.find(query);
    const info = await getInfo();
    materials.push(info);
    console.log(
      "asdf;laksjdf;lasjdf;lasdjf;lasdjfasdfklasdfj;asdlkfj;asdf",
      materials
    );

    res.send(materials);
  } catch (error) {
    console.error(error);
    // Handle the error

    res.status(500).send("Internal Server Error");
  }
});

//@description     Register new material
//@route           POST /api/material/
//@access          Public
const registerMaterial = asyncHandler(async (req, res) => {
  const {
    Phase,
    name,
    A,
    B,
    C,
    indexing,
    latt_x,
    latt_y,
    latt_z,
    angle_x,
    anlge_y,
    angle_z,
    space_group,
    total_energy,
    energy_form,
    e11,
    e22,
    e31,
    e32,
    C11,
    C12,
    C22,
    C21,
    d11,
    d22,
    d31,
    d32,
    Eg_pbe,
    dielec_elec_xx,
    dielec_elec_yy,
    dielec_elec_zz,
    dielec_ion_xx,
    dielec_ion_yy,
    dielec_ion_zz,
    born_charge_A_xx,
    born_charge_A_yy,
    born_charge_A_zz,
    born_charge_B_xx,
    born_charge_B_yy,
    born_charge_B_zz,
    born_charge_C_xx,
    born_charge_C_yy,
    born_charge_C_zz,
    Parent_1,
    Parent_2,
    Parent_1_e,
    Parent_2_e,
    Parent_min,
    Parent_max,
    synthesis_index,
  } = req.body;

  if (!Material || !Phase || !indexing) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }

  const materialExist = await Material.findOne({ indexing });

  if (materialExist) {
    res.status(400);
    throw new Error("Material already exists");
  }

  const material = await Material.create({
    Phase,
    name,
    A,
    B,
    C,
    indexing,
    latt_x,
    latt_y,
    latt_z,
    angle_x,
    anlge_y,
    angle_z,
    space_group,
    total_energy,
    energy_form,
    e11,
    e22,
    e31,
    e32,
    C11,
    C12,
    C22,
    C21,
    d11,
    d22,
    d31,
    d32,
    Eg_pbe,
    dielec_elec_xx,
    dielec_elec_yy,
    dielec_elec_zz,
    dielec_ion_xx,
    dielec_ion_yy,
    dielec_ion_zz,
    born_charge_A_xx,
    born_charge_A_yy,
    born_charge_A_zz,
    born_charge_B_xx,
    born_charge_B_yy,
    born_charge_B_zz,
    born_charge_C_xx,
    born_charge_C_yy,
    born_charge_C_zz,
    Parent_1,
    Parent_2,
    Parent_1_e,
    Parent_2_e,
    Parent_min,
    Parent_max,
    synthesis_index,
  });

  if (material) {
    res.status(201).json({
      _id: material._id,
      Phase: material.Phase,
      name: material.name,
      A: material.A,
      B: material.B,
      C: material.C,
      indexing: material.indexing,
      latt_x: material.latt_x,
      latt_y: material.latt_y,
      latt_z: material.latt_z,
      angle_x: material.angle_x,
      anlge_y: material.anlge_y,
      angle_z: material.angle_z,
      space_group: material.space_group,
      total_energy: material.total_energy,
      energy_form: material.energy_form,
      e11: material.e11,
      e22: material.e22,
      e31: material.e31,
      e32: material.e32,
      C11: material.C11,
      C12: material.C12,
      C22: material.C22,
      C21: material.C21,
      d11: material.d11,
      d22: material.d22,
      d31: material.d31,
      d32: material.d32,
      Eg_pbe: material.Eg_pbe,
      dielec_elec_xx: material.dielec_elec_xx,
      dielec_elec_yy: material.dielec_elec_yy,
      dielec_elec_zz: material.dielec_elec_zz,
      dielec_ion_xx: material.dielec_ion_xx,
      dielec_ion_yy: material.dielec_ion_yy,
      dielec_ion_zz: material.dielec_ion_zz,
      born_charge_A_xx: material.born_charge_A_xx,
      born_charge_A_yy: material.born_charge_A_yy,
      born_charge_A_zz: material.born_charge_A_zz,
      born_charge_B_xx: material.born_charge_B_xx,
      born_charge_B_yy: material.born_charge_B_yy,
      born_charge_B_zz: material.born_charge_B_zz,
      born_charge_C_xx: material.born_charge_C_xx,
      born_charge_C_yy: material.born_charge_C_yy,
      born_charge_C_zz: material.born_charge_C_zz,
      Parent_1: material.Parent_1,
      Parent_2: material.Parent_2,
      Parent_1_e: material.Parent_1_e,
      Parent_2_e: material.Parent_2_e,
      Parent_min: material.Parent_min,
      Parent_max: material.Parent_max,
      synthesis_index: material.synthesis_index,
    });
  } else {
    res.status(400);
    throw new Error("Material not found");
  }
});

const registerMaterials = asyncHandler(async (req, res) => {
  req.body.map(async (item, index) => {
    const {
      Phase,
      name,
      A,
      B,
      C,
      indexing,
      latt_x,
      latt_y,
      latt_z,
      angle_x,
      anlge_y,
      angle_z,
      space_group,
      total_energy,
      energy_form,
      e11,
      e22,
      e31,
      e32,
      C11,
      C12,
      C22,
      C21,
      d11,
      d22,
      d31,
      d32,
      Eg_pbe,
      dielec_elec_xx,
      dielec_elec_yy,
      dielec_elec_zz,
      dielec_ion_xx,
      dielec_ion_yy,
      dielec_ion_zz,
      born_charge_A_xx,
      born_charge_A_yy,
      born_charge_A_zz,
      born_charge_B_xx,
      born_charge_B_yy,
      born_charge_B_zz,
      born_charge_C_xx,
      born_charge_C_yy,
      born_charge_C_zz,
      Parent_1,
      Parent_2,
      Parent_1_e,
      Parent_2_e,
      Parent_min,
      Parent_max,
      synthesis_index,
    } = item;

    if (!Material || !Phase || !indexing) {
      res.status(400);
      throw new Error("Please Enter all the Feilds");
    }

    const materialExist = await Material.findOne({ indexing });

    if (materialExist) {
      res.status(400);
      throw new Error("Material already exists");
    }

    const material = await Material.create({
      Phase,
      name,
      A,
      B,
      C,
      indexing,
      latt_x,
      latt_y,
      latt_z,
      angle_x,
      anlge_y,
      angle_z,
      space_group,
      total_energy,
      energy_form,
      e11,
      e22,
      e31,
      e32,
      C11,
      C12,
      C22,
      C21,
      d11,
      d22,
      d31,
      d32,
      Eg_pbe,
      dielec_elec_xx,
      dielec_elec_yy,
      dielec_elec_zz,
      dielec_ion_xx,
      dielec_ion_yy,
      dielec_ion_zz,
      born_charge_A_xx,
      born_charge_A_yy,
      born_charge_A_zz,
      born_charge_B_xx,
      born_charge_B_yy,
      born_charge_B_zz,
      born_charge_C_xx,
      born_charge_C_yy,
      born_charge_C_zz,
      Parent_1,
      Parent_2,
      Parent_1_e,
      Parent_2_e,
      Parent_min,
      Parent_max,
      synthesis_index,
    });

    if (material) {
      res.status(201).json({
        _id: material._id,
        Phase: material.Phase,
        name: material.name,
        A: material.A,
        B: material.B,
        C: material.C,
        indexing: material.indexing,
        latt_x: material.latt_x,
        latt_y: material.latt_y,
        latt_z: material.latt_z,
        angle_x: material.angle_x,
        anlge_y: material.anlge_y,
        angle_z: material.angle_z,
        space_group: material.space_group,
        total_energy: material.total_energy,
        energy_form: material.energy_form,
        e11: material.e11,
        e22: material.e22,
        e31: material.e31,
        e32: material.e32,
        C11: material.C11,
        C12: material.C12,
        C22: material.C22,
        C21: material.C21,
        d11: material.d11,
        d22: material.d22,
        d31: material.d31,
        d32: material.d32,
        Eg_pbe: material.Eg_pbe,
        dielec_elec_xx: material.dielec_elec_xx,
        dielec_elec_yy: material.dielec_elec_yy,
        dielec_elec_zz: material.dielec_elec_zz,
        dielec_ion_xx: material.dielec_ion_xx,
        dielec_ion_yy: material.dielec_ion_yy,
        dielec_ion_zz: material.dielec_ion_zz,
        born_charge_A_xx: material.born_charge_A_xx,
        born_charge_A_yy: material.born_charge_A_yy,
        born_charge_A_zz: material.born_charge_A_zz,
        born_charge_B_xx: material.born_charge_B_xx,
        born_charge_B_yy: material.born_charge_B_yy,
        born_charge_B_zz: material.born_charge_B_zz,
        born_charge_C_xx: material.born_charge_C_xx,
        born_charge_C_yy: material.born_charge_C_yy,
        born_charge_C_zz: material.born_charge_C_zz,
        Parent_1: material.Parent_1,
        Parent_2: material.Parent_2,
        Parent_1_e: material.Parent_1_e,
        Parent_2_e: material.Parent_2_e,
        Parent_min: material.Parent_min,
        Parent_max: material.Parent_max,
        synthesis_index: material.synthesis_index,
      });
    } else {
      res.status(400);
      throw new Error("Material not found");
    }
  });
});

// Material.countDocuments({}, (err, count) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('Number of documents:', count);
//   }
// });

const countMaterials = asyncHandler(async (req, res) => {
  try {
    const rowCount = await Material.countDocuments();
    console.log(rowCount);
    res.send({ rowCount: rowCount });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = {
  allMaterials,
  registerMaterial,
  registerMaterials,
  countMaterials,
};
