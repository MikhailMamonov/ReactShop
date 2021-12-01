using FluentValidation;

namespace ReactShop.Application.Features.CartItems.CreateCartItem
{
    public class CreateCartItemCommandValidator : AbstractValidator<CreateCartItemCommand>
    {
        public CreateCartItemCommandValidator()
        {
            RuleFor(c => c.ShoppingCartId).NotEmpty().WithMessage("Please specify ShoppingCartId");
            RuleFor(c => c.ProductId).NotEmpty().WithMessage("Please specify ProductId"); ;
        }
    }
}