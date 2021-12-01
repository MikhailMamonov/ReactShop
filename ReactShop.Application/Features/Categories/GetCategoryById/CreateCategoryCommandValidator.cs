using FluentValidation;
using ReactShop.Application.Features.Categories.CreateCategory;

namespace ReactShop.Application.Features.Categories.GetCategoryById
{
    public class GetCategoryByIdQueryValidator : AbstractValidator<GetCategoryByIdQuery>
    {
        public GetCategoryByIdQueryValidator()
        {
            RuleFor(c => c.Id).NotEmpty();
        }
    }
}
