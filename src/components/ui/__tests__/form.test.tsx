import { zodResolver } from "@hookform/resolvers/zod";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useForm } from "react-hook-form";
import { describe, expect, it, vi } from "vitest";
import { z } from "zod";
import { Button } from "../button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { Input } from "../input";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
});

type FormSchema = z.infer<typeof formSchema>;

const DemoForm = ({ onSubmit }: { onSubmit: (data: FormSchema) => void }) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

describe("Form", () => {
  it("should render the form with a name input field", () => {
    render(<DemoForm onSubmit={() => {}} />);

    expect(screen.getByLabelText("Name")).toBeInTheDocument();
  });

  it("should display validation error when name is empty", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    render(<DemoForm onSubmit={onSubmit} />);

    const submitButton = screen.getByRole("button", { name: "Submit" });
    await user.click(submitButton);

    expect(await screen.findByText("Name is required")).toBeInTheDocument();
    expect(onSubmit).not.toBeCalled();
  });

  it("should submit the form with the correct data", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    render(<DemoForm onSubmit={onSubmit} />);

    const nameInput = screen.getByLabelText("Name");
    const submitButton = screen.getByRole("button", { name: "Submit" });

    await user.type(nameInput, "John Doe");
    await user.click(submitButton);

    expect(onSubmit).toBeCalledWith({ name: "John Doe" }, expect.anything());
  });
});
