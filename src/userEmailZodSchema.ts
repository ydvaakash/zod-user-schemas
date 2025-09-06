import * as z from "zod";

const userEmailZodSchema = z
	.string()

	.trim()

	.pipe(z.email())

	.refine(
		(value) => {
			return !/\s/.test(value);
		},
		{ error: "Email cannot contain spaces." },
	)

	.refine(
		(value) => {
			return value.length <= 254;
		},
		{ error: "Email must not exceed 254 characters." },
	)

	.refine(
		(value) => {
			return value.split("@")[0].length <= 64;
		},
		{ error: "Email username must not exceed 64 characters." },
	)

	.refine(
		(value) => {
			return !/(\.\.|--|__)/.test(value);
		},
		{
			error: "Email cannot contain consecutive dots, hyphens, or underscores.",
		},
	)

	.refine(
		(value) => {
			return !/^[-_.]/.test(value.split("@")[0]);
		},
		{ error: "Email username cannot start with a special character." },
	)

	.refine(
		(value) => {
			return !/[-_.]$/.test(value.split("@")[0]);
		},
		{ error: "Email username cannot end with a special character." },
	);

export { userEmailZodSchema };
export type userEmailTypeFromZodSchema = z.infer<typeof userEmailZodSchema>;
