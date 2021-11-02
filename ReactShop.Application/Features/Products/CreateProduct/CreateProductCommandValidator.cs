using FluentValidation;

namespace ReactShop.Application.Features.Products.CreateProduct
{
    public class CreateProductCommandValidator : AbstractValidator<CreateProductCommand>
    {
        public CreateProductCommandValidator()
        {
            RuleFor(c => c.Name).NotEmpty().WithMessage("Please specify Name");
            RuleFor(c => c.CategoryId).NotEmpty().WithMessage("Please specify CategoryId"); ;
        }
    }
}