import * as z from "zod";

const firstNameZodSchema = z
	.string()

	.trim()

	.min(1, { error: "First name must be at least 1 character." })

	.max(50, { error: "First name must not exceed 50 characters." })

	.regex(/^[A-Za-z][A-Za-z\s'-]*$/, {
		error:
			"First name must start with a letter and only contain letters, spaces, apostrophes, or hyphens.",
	})

	.refine(
		(value: string) => {
			return !/(.)\1{2,}/.test(value);
		},
		{
			error:
				"First name cannot have more than 2 consecutive occurrences of the same character.",
		},
	)

	.refine(
		(value: string) => {
			return !/[\s'-]{2,}/.test(value);
		},
		{
			error:
				"First name cannot contain consecutive non-letter characters like --, '', or multiple spaces.",
		},
	)

	.refine(
		(value: string) => {
			return !/\d/.test(value);
		},
		{ error: "First name cannot contain numbers." },
	);

export { firstNameZodSchema };
export type firstNameTypeFromZodSchema = z.infer<typeof firstNameZodSchema>;
