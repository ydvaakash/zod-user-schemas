import * as z from "zod";

const lastNameZodSchema = z
	.string()

	.trim()

	.min(1, { error: "Last name must be at least 1 character." })

	.max(50, { error: "Last name must not exceed 50 characters." })

	.regex(/^[A-Za-z][A-Za-z\s'-]*$/, {
		error:
			"Last name must start with a letter and only contain letters, spaces, apostrophes, or hyphens.",
	})

	.refine(
		(value) => {
			return !/(.)\1{2,}/.test(value);
		},
		{
			error:
				"Last name cannot have more than 2 consecutive occurrences of the same character.",
		},
	)

	.refine(
		(value) => {
			return !/[\s'-]{2,}/.test(value);
		},
		{
			error:
				"Last name cannot contain consecutive non-letter characters like --, '', or multiple spaces.",
		},
	)

	.refine(
		(value) => {
			return !/\d/.test(value);
		},
		{ error: "Last name cannot contain numbers." },
	);

export { lastNameZodSchema };
export type lastNameTypeFromZodSchema = z.infer<typeof lastNameZodSchema>;
