using FluentValidation;
using ReactShop.Application.Features.Categories.CreateCategory;

namespace ReactShop.Application.Features.Categories.UpdateCategory
{
    public class UpdateCategoryCommandValidator : AbstractValidator<UpdateCategoryCommand>
    {
        public UpdateCategoryCommandValidator()
        {
            RuleFor(c => c.Name).NotEmpty().WithMessage("Please specify a name");
            RuleFor(c => c.Name).Length(5, 10).WithMessage("Please specify lenght min 5 max 10");
        }
    }
}
