using FluentValidation;

namespace ReactShop.Application.Features.Products.UpdateProduct
{
    public class UpdateProductCommandValidator : AbstractValidator<UpdateProductCommand>
    {
        public UpdateProductCommandValidator()
        {
            RuleFor(c => c.Name).NotEmpty().WithMessage("Please specify Name");
            RuleFor(c => c.CategoryId).NotEmpty().WithMessage("Please specify CategoryId");
        }
    }
}