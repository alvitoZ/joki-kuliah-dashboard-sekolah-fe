import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Popup = ({
  handleOpenEditDialog,
  popupData,
  setupdateData,
  updateData,
  update,
}) => {
  return (
    <div>
      <form onSubmit={handleOpenEditDialog}>
        <Dialog
          open={open}
          handler={handleOpenEditDialog}
          // dismiss={{
          //   outsidePress: true,
          // }}
        >
          <div className="flex items-center justify-between">
            <DialogHeader>Edit Detail Stok Darah</DialogHeader>
            <XMarkIcon
              className="mr-3 h-5 w-5"
              onClick={handleOpenEditDialog}
            />
          </div>
          <DialogBody divider>
            <div className="grid gap-2">
              <Typography variant="h6">Jenis Golongan Darah</Typography>
              <div className="ml-5">
                <Typography variant="lead" className="font-bold">
                  {popupData.goldarah}
                </Typography>
              </div>

              <Typography variant="h6">Ubah Detail Sel Darah</Typography>
              <div className="ml-5 grid gap-3">
                <Typography variant="small" className="font-bold">
                  Nama Sel Darah
                </Typography>
                <Input
                  type="text"
                  label={popupData.title}
                  onChange={(e) => {
                    setupdateData({
                      id: popupData.id,
                      title: popupData.title,
                      detail_stock: [
                        {
                          id: popupData.id,
                          title: e.target.value,
                          stock: parseInt(updateData.detail_stock[0].stock),
                        },
                      ],
                    });
                  }}
                />
                <Typography variant="small" className="font-bold">
                  Jumlah Stok
                </Typography>
                <Input
                  type="number"
                  label={popupData.stock}
                  onChange={(e) => {
                    setupdateData({
                      id: popupData.id,
                      title: popupData.title,
                      detail_stock: [
                        {
                          id: popupData.id,
                          title: updateData.detail_stock[0].title,
                          stock: parseInt(e.target.value),
                        },
                      ],
                    });
                  }}
                />
              </div>
            </div>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button
              variant="gradient"
              color="red"
              onClick={() => update(popupData.id, updateData)}
            >
              ubah stok
            </Button>
            <Button
              variant="outlined"
              color="red"
              onClick={handleOpenEditDialog}
            >
              tutup
            </Button>
          </DialogFooter>
        </Dialog>
      </form>
    </div>
  );
};

export default Popup;
