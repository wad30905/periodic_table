const mongoose = require("mongoose");

const materialSchema = mongoose.Schema(
  {
    Phase: { type: "String", required: true },
    name: { type: "String", required: true },
    A: { type: "String", required: true },
    B: { type: "String", required: true },
    C: { type: "String", required: true },
    indexing: { type: "String", required: true },
    latt_x: { type: "String", required: true },
    latt_y: { type: "String", required: true },
    latt_z: { type: "String", required: true },
    angle_x: { type: "String", required: true },
    angle_y: { type: "String", required: true },
    angle_z: { type: "String", required: true },
    space_group: { type: "String", required: true },
    total_energy: { type: "String", required: true },
    energy_form: { type: "String", required: true },
    e11: { type: "String", required: false },
    e22: { type: "String", required: false },
    e31: { type: "String", required: false },
    e32: { type: "String", required: false },
    C11: { type: "String", required: true },
    C12: { type: "String", required: true },
    C22: { type: "String", required: true },
    C21: { type: "String", required: true },
    d11: { type: "String", required: false },
    d22: { type: "String", required: false },
    d31: { type: "String", required: false },
    d32: { type: "String", required: false },
    Eg_pbe: { type: "String", required: true },
    dielec_elec_xx: { type: "String", required: true },
    dielec_elec_yy: { type: "String", required: true },
    dielec_elec_zz: { type: "String", required: true },
    dielec_ion_xx: { type: "String", required: true },
    dielec_ion_yy: { type: "String", required: true },
    dielec_ion_zz: { type: "String", required: true },
    born_charge_A_xx: { type: "String", required: true },
    born_charge_A_yy: { type: "String", required: true },
    born_charge_A_zz: { type: "String", required: true },
    born_charge_B_xx: { type: "String", required: true },
    born_charge_B_yy: { type: "String", required: true },
    born_charge_B_zz: { type: "String", required: true },
    born_charge_C_xx: { type: "String", required: true },
    born_charge_C_yy: { type: "String", required: true },
    born_charge_C_zz: { type: "String", required: true },
    Parent_1: { type: "String", required: true },
    Parent_2: { type: "String", required: true },
    Parent_1_e: { type: "String", required: true },
    Parent_2_e: { type: "String", required: true },
    Parent_min: { type: "String", required: true },
    Parent_max: { type: "String", required: true },
    synthesis_index: { type: "String", required: true },
  },
  { timestamps: true }
);

const Material = mongoose.model("Material", materialSchema);

module.exports = Material;
