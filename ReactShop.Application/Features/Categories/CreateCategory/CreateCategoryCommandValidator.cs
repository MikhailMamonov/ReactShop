using FluentValidation;

namespace ReactShop.Application.Features.Categories.CreateCategory
{
    public class CreateCategoryCommandValidator : AbstractValidator<CreateCategoryCommand>
    {
        public CreateCategoryCommandValidator()
        {
            RuleFor(c => c.Name).NotEmpty().WithMessage("Please specify a name");
        }
    }
}
