const { sendError, generationID, writeFileSync } = require("../utils");

let fakeData = require("../data/products.json");

const CreateController = (req, res) => {
  try {
    const { name, price } = req.body;

    const newP = { id: generationID(), name, price };

    fakeData = [...fakeData, newP];

    writeFileSync("data/products.json", fakeData);

    return res.send(202, {
      message: "Tạo sản phẩm thành công",
      payload: newP,
    });
  } catch (error) {
    console.log(error);
    sendError();
  }
};

const GetController = (req, res) => {
  try {
    return res.send(200, fakeData);
  } catch (error) {
    console.log(error);
    sendError();
  }
};

const GetByIdController = (req, res) => {
  try {
    const { id } = req.params;

    const detail = fakeData.find((item) => item.id.toString() === id);

    if (!detail) {
      return res.send(404, {
        message: "Không tìm thấy",
      });
    }

    return res.send(202, {
      message: "Lấy thông tin thành công",
      payload: detail,
    });
  } catch (error) {
    console.log(error);
    sendError();
  }
};

const UpdateController = (req, res) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;

    const updateData = {
      id: +id,
      name,
      price,
    };

    fakeData = fakeData.map((item) => {
      if (item.id === +id) {
        return updateData;
      }

      return item;
    });

    writeFileSync("data/products.json", fakeData);

    return res.send(202, {
      message: "Cập nhật sản phẩm thành công",
      payload: updateData,
    });
  } catch (error) {
    console.log(error);
    sendError();
  }
};

const DeleteController = (req, res) => {
  try {
    const { id } = req.params;

    fakeData = fakeData.filter((item) => item.id !== +id);

    writeFileSync("data/products.json", fakeData);

    return res.send(202, {
      message: "Xóa sản phẩm thành công",
    });
  } catch (error) {
    console.log(error);
    sendError();
  }
};

module.exports = {
  CreateController: CreateController,
  GetController: GetController,
  GetByIdController: GetByIdController,
  UpdateController: UpdateController,
  DeleteController: DeleteController,
};
