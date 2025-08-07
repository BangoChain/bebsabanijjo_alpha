"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  FormControlLabel,
  Switch,
  // Box,
  Grid,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { productSchema, ProductFormType } from "./productSchema";

const categories = ["Electronics", "Clothing", "Books"];
const units = ["pcs", "kg", "litre"];

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (product: ProductFormType & { productId: string }) => void;
  editProduct?: ProductFormType & { productId: string };
};

export const CreateProductModal = ({
  open,
  onClose,
  onSubmit,
  editProduct,
}: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ProductFormType>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      category: "",
      unit: "",
      vat: 0,
      reorderLevel: 0,
      purchaseRate: 0,
      price: 0,
      wholesaleRate: 0,
      stockQuantity: 0,
      rating: 0,
      isService: false,
      type: "Product",
      imageUrl: "",
    },
  });

  const isService = watch("isService");

  // useEffect(() => {
  //   if (editProduct) {
  //     reset(editProduct);
  //   } else {
  //     reset();
  //   }
  // }, [editProduct, reset]);
  useEffect(() => {
    if (editProduct) {
      reset(editProduct);
    } else {
      reset({
        name: "",
        category: "",
        unit: "",
        vat: 0,
        reorderLevel: 0,
        purchaseRate: 0,
        price: 0,
        wholesaleRate: 0,
        stockQuantity: 0,
        rating: 0,
        isService: false,
        type: "Product",
        imageUrl: "",
      });
    }
  }, [editProduct, reset]);

  // useEffect(() => {
  //   if (!open) {
  //     reset();
  //   }
  // }, [open, reset]);

  const handleFormSubmit = (data: ProductFormType) => {
    const product = {
      ...data,
      productId: editProduct?.productId || uuidv4(),
    };
    onSubmit(product);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{editProduct ? "Edit Product" : "Add Product"}</DialogTitle>
      <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label="Name"
                fullWidth
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label="Category"
                select
                fullWidth
                {...register("category")}
                error={!!errors.category}
                helperText={errors.category?.message}
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label="Unit"
                select
                fullWidth
                {...register("unit")}
                error={!!errors.unit}
                helperText={errors.unit?.message}
              >
                {units.map((unit) => (
                  <MenuItem key={unit} value={unit}>
                    {unit}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                type="number"
                label="VAT (%)"
                fullWidth
                {...register("vat", { valueAsNumber: true })}
                error={!!errors.vat}
                helperText={errors.vat?.message}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                type="number"
                label="Reorder Level"
                fullWidth
                {...register("reorderLevel", { valueAsNumber: true })}
                error={!!errors.reorderLevel}
                helperText={errors.reorderLevel?.message}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                type="number"
                label="Purchase Rate"
                fullWidth
                {...register("purchaseRate", { valueAsNumber: true })}
                error={!!errors.purchaseRate}
                helperText={errors.purchaseRate?.message}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                type="number"
                label="Price"
                fullWidth
                {...register("price", { valueAsNumber: true })}
                error={!!errors.price}
                helperText={errors.price?.message}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                type="number"
                label="Wholesale Rate"
                fullWidth
                {...register("wholesaleRate", { valueAsNumber: true })}
                error={!!errors.wholesaleRate}
                helperText={errors.wholesaleRate?.message}
              />
            </Grid>

            {!isService && (
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  type="number"
                  label="Stock Quantity"
                  fullWidth
                  {...register("stockQuantity", { valueAsNumber: true })}
                  error={!!errors.stockQuantity}
                  helperText={errors.stockQuantity?.message}
                />
              </Grid>
            )}

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                type="number"
                label="Rating"
                fullWidth
                {...register("rating", { valueAsNumber: true })}
                error={!!errors.rating}
                helperText={errors.rating?.message}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                label="Image URL"
                fullWidth
                {...register("imageUrl")}
                error={!!errors.imageUrl}
                helperText={errors.imageUrl?.message}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <FormControlLabel
                control={
                  <Switch {...register("isService")} checked={isService} />
                }
                label="Is Service?"
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            {editProduct ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
